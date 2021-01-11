import React, {useState} from 'react';
import styled from 'styled-components';
import {HiOutlineCalendar, HiChevronLeft, HiChevronRight} from 'react-icons/hi';

interface MonthInfo {
    monthIndex: number,
    year: number
}

interface DatePickerProps {
    type: 'range' | 'single'
}
const DatePicker = ({type}: DatePickerProps) => {

    const [dateStart, setDateStart] = useState<Date | null>(null)
    const [dateEnd, setDateEnd] = useState<Date | null>(null)

    // set date picker to focus current month by default
    const [focusMonth, setFocusMonth] = useState<MonthInfo>({
        monthIndex: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const [showDatePicker, setShowDatePicker] = useState<boolean>(true)

    const getDateStr = (): string => {
        if (type == 'range') {
            if (dateStart == null || dateEnd == null) return `No date selected`;
            return `---`;
        }
        else if (type == 'single') {
            if (dateStart == null) return `No date selected`;
            return `---`;
        }
        return ``;
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
        <DatePickerContainer>
            <CalendarIcon><HiOutlineCalendar /></CalendarIcon>
            <DateInfo>{getDateStr()}</DateInfo>

            {showDatePicker && <DatePickerPopup>
                
                {/* Month Area */}
                <DateHeader className="no-select">
                    <DateArrow onClick={() => updateFocusMonth(-1)}><HiChevronLeft /></DateArrow>
                    <DateText>{MONTHS[focusMonth.monthIndex]} {focusMonth.year}</DateText>
                    <DateArrow onClick={() => updateFocusMonth(1)}><HiChevronRight /></DateArrow>
                </DateHeader>

                <MonthDates>
                    {Array.from(new Array(5), (i: number) => 
                        <Week key={i}>
                            {Array.from(new Array(7), (i: number) => <Day key={i}>{i}</Day>)}
                        </Week>
                    )}
                </MonthDates>

            </DatePickerPopup>}
        </DatePickerContainer>
    </div>)
}

const MONTHS = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

const CalendarIcon = styled.div``
const DateInfo = styled.div``
const DateHeader = styled.div``
const DateArrow = styled.div``
const DateText = styled.div``
const Week = styled.div``
const Day = styled.div``
const MonthDates= styled.div`
    ${Week} {
        height: 20px;
        margin-top: 5px;
        display: flex;

        ${Day} {
            width: 30px;
            height: 20px;
            border: 1px solid green;
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
    box-shadow: 0px 0px 6px rgba(59, 67, 83, 0.07);
    padding-bottom: 5px;

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
        width: 25px;
        height: 23px;
        text-align: center;
        transform: translateY(3px);
    }

    ${DateInfo} {
        font-size: 0.8rem;
        transform: translateY(1px);
    }
`

export default DatePicker;