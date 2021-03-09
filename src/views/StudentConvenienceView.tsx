import React, {useState, useEffect} from 'react';
import Centered from '../components/toolbox/layout/Centered';
import Button from '../components/toolbox/form/Button';
import {useHistory} from 'react-router';
import {useSaveConveniencePreferencesMutation} from '../API/queries/types/graphqlFragmentTypes';
import {resolveRedirect} from '../components/hooks/usePushRedirect';
import {fetchUser} from '../redux/actions/user';
import {useSelector, useDispatch} from 'react-redux';

import {ReduxState} from '../redux/reducers/all_reducers';

const StudentConvenience = () => {

    const history = useHistory();
    const tags = Array.from(new Array(10), (_, i: number) => `Sample Tag ${i}`);

    //============== GRAPHQL ==============
    const [SavePreferences, {data: savePreferencesResponse}] = useSaveConveniencePreferencesMutation();

    //============== STATE ==============
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const dispatch = useDispatch();
    const user = useSelector((state: ReduxState) => state.user);

    //============== EFFECTS ==============
    useEffect(() => {
        if (savePreferencesResponse && savePreferencesResponse.saveConveniencePreferences) {
            
            // if successfully saved, go back to the p
            if (savePreferencesResponse.saveConveniencePreferences.success) {
                dispatch(fetchUser(user, {update: true}));
            }
            else {
                // error occurred saving
                console.error("Problem saving student's preferences");
            }
        }
    }, [savePreferencesResponse]);

    //============== FUNCTIONS ==============
    const addTag = (tag: string) => {
        if (selectedTags.includes(tag)) return;

        let new_tags = [...selectedTags];
        new_tags.push(tag);
        setSelectedTags(new_tags);
    }

    const removeTag = (tag: string) => {
        setSelectedTags(selectedTags.filter(i => i != tag));
    }

    const handlePreferenceSubmission = () => {

        // no preferences set ... no need to process gql queries
        if (selectedTags.length == 0) history.push('/');

        // save the selected preferences
        else {
            SavePreferences({
                variables: {
                    preferences: selectedTags
                }
            });
        }
    }

    //============== RENDER ==============
    return (<Centered width="400" height="400">
        <div>
            
            {selectedTags.length > 0 && <div>
                <div>Personalized tags</div>
                <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {selectedTags.map((tag_: string, i: number) => 
                        <TagOption selected={true} onClick={removeTag} key={i} tag_value={tag_} />
                    )}
                </div>
            </div>}

            <div  style={{marginTop: '20px'}}>
                <div>Select the tags that best describe you</div>
                <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {tags
                        .filter(tag_ => !selectedTags.includes(tag_))
                        .map((tag_: string, i: number) => 
                        <TagOption selected={false} onClick={addTag} key={i} tag_value={tag_} />
                    )}
                </div>
            </div>

            {/* Next btn */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <div>
                    <Button 
                        bold={true}
                        transformDisabled={true}
                        text={selectedTags.length == 0? 'Skip': 'Save Preferences'}
                        background={selectedTags.length == 0 ? "#ccc" : "#E0777D"}
                        textColor={selectedTags.length == 0 ? "#3B4353" : "white"}
                        onClick={handlePreferenceSubmission}
                    />
                </div>
            </div>
            
        </div>
    </Centered>)
}

const TagOption = ({tag_value, onClick, selected}: {tag_value: string, selected: boolean, onClick: (arg0: string) => void}) => {

    return (<div className={`selectable-tag-option ${selected ? "selected" : ""}`} onClick={() => onClick(tag_value)}>
            {tag_value}
        </div>)
}

export default StudentConvenience;