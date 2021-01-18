import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {HiOutlineCalendar, HiChevronLeft, HiChevronRight} from 'react-icons/hi';

interface MonthInfo {
    monthIndex: number,
    year: number
}

interface DatePickerProps {
    type: 'range' | 'single'
    onChange: (start: Date | null, end: Date | null) => void
}
const DatePicker = ({type, onChange}: DatePickerProps) => {

    const [dateStart, setDateStart] = useState<Date | null>(null)
    const [dateEnd, setDateEnd] = useState<Date | null>(null)

    // set date picker to focus current month by default
    const [focusMonth, setFocusMonth] = useState<MonthInfo>({
        monthIndex: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const windowRef = useRef<HTMLDivElement>(null)

    const closeOnClickOutside = (e: MouseEvent) => {
        if (!windowRef.current) return;
        if (!windowRef.current.contains(e.target as Node)) {
            setShowDatePicker(false);
        }
    }
    useEffect(() => {
        if (showDatePicker) window.addEventListener('click', closeOnClickOutside);
        return () => {
            window.removeEventListener('click', closeOnClickOutside);
        }
    }, [showDatePicker]);
    useEffect(() => {
        onChange(dateStart, dateEnd);
    }, [dateStart, dateEnd]);

    const getDateStr = (): string => {
        if (type == 'range') {
            if (dateStart == null || dateEnd == null) return `No date selected`;
            return `${dateStart.getMonth() + 1}/${dateStart.getDate()}/${dateStart.getFullYear()} - ${dateEnd.getMonth() + 1}/${dateEnd.getDate()}/${dateEnd.getFullYear()}`;
        }
        else if (type == 'single') {
            if (dateStart == null) return `No date selected`;
            return `---`;
        }
        return ``;
    }

    const isToday = (date_: Date) => {
        let today_: Date = new Date();
        return sameDate(date_, today_);
    }

    const sameDate = (date1: Date | null, date2: Date | null): boolean => {
        if (date1 == null || date2 == null) return false;
        return date1.getFullYear() == date2.getFullYear() 
            && date1.getMonth() == date2.getMonth()
            && date1.getDate() == date2.getDate();
    }

    const updateFocusMonth = (dir: number) => {
        if (dir == -1 && focusMonth.monthIndex == 0) {
            setFocusMonth({
                monthIndex: 11, year: focusMonth.year - 1
            })
        }
        else if (dir == 1 && focusMonth.monthIndex == 11) {
            setFocusMonth({
                monthIndex: 0, year: focusMonth.year + 1
            })
        }
        else {
            setFocusMonth({
                monthIndex: focusMonth.monthIndex + dir, year: focusMonth.year
            })
        }
    }

    return (<div className="date-picker_">
        <DatePickerContainer ref={windowRef}>
            <CalendarIcon><HiOutlineCalendar /></CalendarIcon>
            <DateInfo onClick={() => setShowDatePicker(!showDatePicker)}>{getDateStr()}</DateInfo>

            {showDatePicker && <DatePickerPopup>
                
                {/* Month Area */}
                <DateHeader className="no-select">
                    <DateArrow onClick={() => updateFocusMonth(-1)}><HiChevronLeft /></DateArrow>
                    <DateText>{MONTHS[focusMonth.monthIndex]} {focusMonth.year}</DateText>
                    <DateArrow onClick={() => updateFocusMonth(1)}><HiChevronRight /></DateArrow>
                </DateHeader>

                <MonthDates>
                    {function () {
                        let month_: Date = new Date(focusMonth.year, focusMonth.monthIndex, 1);     
                        let month_started: boolean = false;      
                        let day = 0;             
                        return [0, 1, 2, 3, 4, 5].map((i: number) => {
                            return (<Week key={i}>
                                {[0,1,2,3,4,5,6].map((j: number) => {
                                    if (!month_started && j == month_.getDay()) month_started = true;
                                    if (!month_started) return (<Day key={j}></Day>)
                                    else {
                                        ++day;
                                        let day_: Date = new Date(focusMonth.year, focusMonth.monthIndex, day);

                                        if (day_.getMonth() != month_.getMonth()) return <div key={j} />
                                        else {
                                            return (<Day 
                                                onClick={() => {
                                                    if (dateStart == null) setDateStart(day_);
                                                    else if (sameDate(dateStart, day_)) {
                                                        setDateStart(dateEnd);
                                                        setDateEnd(null);
                                                    }
                                                    else if (sameDate(dateEnd, day_)) {
                                                        setDateEnd(null);
                                                    }
                                                    else {
                                                        if (day_ > dateStart) setDateEnd(day_);
                                                        else {
                                                            setDateEnd(dateStart);
                                                            setDateStart(day_);
                                                        }
                                                    }
                                                }}
                                                className={`cursor no-select \
                                                ${dateEnd != null && dateStart != null && day_ < dateEnd && day_ > dateStart ? `intermediate` : ``}\
                                                ${sameDate(dateStart, day_) || sameDate(dateEnd, day_) ? 'active' : ''}\
                                                ${dateStart != null && dateEnd != null && sameDate(dateStart, day_) ? `date-start` : ``}
                                                ${dateStart != null && dateEnd != null && sameDate(dateEnd, day_) ? `date-end` : ``}
                                                ${isToday(day_)? `today` : ``}`} key={j}>
                                                    <DayPad><DayNum>{day_.getDate()}</DayNum></DayPad>
                                                </Day>);
                                        }
                                    }
                                })}
                            </Week>)
                        })
                    }()}
                </MonthDates>

                <DatePopupFooter>
                    <MiniBtn
                        onClick={() => {setDateStart(null); setDateEnd(null);}} 
                        className={`${dateStart != null || dateEnd != null ? `active` : ``}`}>clear</MiniBtn>
                    <MainBtn
                        style={{marginLeft: `5px`}}
                        onClick={() => {setShowDatePicker(false);}}>Save</MainBtn>
                </DatePopupFooter>

            </DatePickerPopup>}
        </DatePickerContainer>
    </div>)
}

const MONTHS = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

const DatePopupFooter = styled.div`
    height: 30px;
    border-top: 1px solid #9fb0bd;
    margin-top: 5px;
    text-align: right;
    padding: 2px 4px;
`
const MainBtn = styled.div`
background-color: #E0777D;
display: inline-block;
font-size: 0.7rem;
padding: 2px 8px;
border-radius: 2px;
color: white;
cursor: pointer;
opacity: 0.6;
transition: opacity 0.25s;
&.active {
    opacity: 1;
}
`
const MiniBtn = styled.div`
    background-color: #9fb0bd;
    display: inline-block;
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.25s;
    &.active {
        opacity: 1;
    }
`
const CalendarIcon = styled.div``
const DateInfo = styled.div``
const DateHeader = styled.div``
const DateArrow = styled.div``
const DateText = styled.div``
const Week = styled.div``
const Day = styled.div``
const DayPad = styled.div``
const DayNum = styled.div``
const MonthDates= styled.div`
    ${Week} {
        height: 20px;
        margin-top: 5px;
        display: flex;

        ${Day} {
            width: 30px;
            min-width: 30px;
            max-width: 30px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            font-family: sans-serif;
            font-size: 0.7rem;
            font-weight: 600;
            position: relative;

            &.cursor { cursor: pointer; }

            &.date-start {
                &::before {
                    content: '';
                    position: absolute;
                    right: 0;
                    width: 50%;
                    height: 20px;
                    background-color: #ebeef5;
                    z-index: 1;
                }
            }

            &.date-end {
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 50%;
                    height: 20px;
                    background-color: #ebeef5;
                }
            }

            &.today {
                ${DayPad} {
                    border: 1px solid #E0777D;
                    border-radius: 3px;
                    position: relative;
                    z-index: 2;
                }
            }

            &.intermediate {

                ${DayPad} {
                    background-color: #ebeef5;
                    height: 20px;
                    width: 30px;
                }
            }

            ${DayPad} {
                background-color: rgba(0, 0, 0, 0);
                transition: baclground-color 0.25s;
                box-sizing: border-box;
            }
            &.active {
                ${DayPad} {
                    ${DayNum} {
                        position: relative;
                        z-index: 2;
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        margin: 0 auto;
                        border-radius: 20px;
                        background-color: #7896ad;
                        color: white;
                        box-shadow: 0px 0px 5px rgba(120, 150, 173, 0.5);
                    }
                }
            }
        }
    }
`
const DatePickerPopup = styled.div`
    border: 1px solid #9fb0bd;
    position: absolute;
    top: 35px;
    background-color: white;
    border-radius: 3px;
    cursor: default;
    z-index: 5;
    box-shadow: 0px 0px 6px rgba(59, 67, 83, 0.07);

    ${DateHeader} {
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid #9fb0bd;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${DateArrow} {
            margin: 0 5px;
            width: 18px;
            text-align: center;
            box-sizing: border-box;
            height: 18px;
            line-height: 18px;
            border-radius: 3px;
            background-color: white;
            cursor: pointer;
            color: #9fb0bd;
            transition: background-color 0.25s;

            &:hover {
                background-color: #F6F7F9;
            }
        }
        ${DateText} {
            font-weight: 600;
            font-size: 0.9rem;
        }
    }
`
const DatePickerContainer = styled.div`
    border: 1px solid #9fb0bd;
    position: relative;
    display: flex;
    align-items: center;
    width: 170px;
    padding-right: 8px;
    border-radius: 3px;
    color: #3B4353;
    font-family: sans-serif;
    cursor: pointer;
    transition: border 0.25s;

    &:hover {
        border: 1px solid #7490a6;
    }

    ${CalendarIcon} {
        width: 20px;
        height: 20px;
        font-size: 0.8rem;
        text-align: center;
    }

    ${DateInfo} {
        font-size: 0.75rem;
        transform: translateY(1px);
    }
`

export default DatePicker;