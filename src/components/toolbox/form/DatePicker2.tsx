import React, {useRef, useEffect, useState} from 'react'
import Button from './Button'
import {FiCalendar, FiArrowRight, FiArrowLeft} from 'react-icons/fi'
import {HiX} from 'react-icons/hi'

export const DateRangePicker = ({onChange}: 
    {onChange: (start: Date | null, end: Date | null) => void}) => {

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  
    useEffect(() => {
      onChange(startDate, endDate);
      if (startDate == null) {
        setError("No start date selected");
      }
      else if (startDate < new Date()) {
          setError("Cannot set date in the past");
      }
      else if (endDate == null) {
        setError("No end date selected");
      }
      else if (endDate < startDate) {
        setError("End date must come after start date");
      }
      else {
        setError(null);
      }
  
    }, [startDate, endDate]);
  
    return (<div style={{}}>
  
      {showDatePicker && <div className="date-picker-popup-2-container">
        <div style={{width: '240px'}}>
          <CalendarPicker month={startDate == null ? new Date() : startDate} 
            exclude={endDate == null ? new Date() : endDate}
            onDateChange={(dir: number) => {
              console.log(`Date change. Dir = ${dir}`);
              if (dir == -1) {
                let date = new Date(startDate == null ? new Date() : startDate);
                date.setMonth(date.getMonth() - 1);
                setStartDate(date);
              }
              else if (dir == 1) {
                let date = new Date(startDate == null ? new Date() : startDate);
                date.setMonth(date.getMonth() + 1);
                setStartDate(date);
              }
            }}
            onDateSelect={(d: Date) => {
              setStartDate(d);
            }}
          />
        </div>
        <div style={{width: '240px'}}>
          <CalendarPicker month={endDate == null ? new Date() : endDate}
            exclude={startDate == null ? new Date() : startDate}
            onDateChange={(dir: number) => {
              if (dir == -1) {
                let date = new Date(endDate == null ? new Date() : endDate);
                date.setMonth(date.getMonth() - 1);
                setEndDate(date);
              }
              else if (dir == 1) {
                let date = new Date(endDate == null ? new Date() : endDate);
                date.setMonth(date.getMonth() + 1);
                setEndDate(date);
              }
            }}
            onDateSelect={(d: Date) => {
              setEndDate(d);
            }}
          />
        </div>
        <div className="date-picker-result">
          
          <div style={{
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              
              <div style={{marginBottom: '20px'}}>
                <div style={{fontWeight: 600}}>Start Date</div>
                {startDate == null && <div className="date-selected-container" style={{fontStyle: 'italic'}}>
                  <div className="date-area">None</div>  
                </div>}
                {startDate != null && <div className="date-selected-container">
                  <div className="date-area"><span style={{fontWeight: 600}}>{month_abbr[startDate.getMonth()]} {startDate.getDate()}</span> {startDate.getFullYear()}</div>  
                  <div className="close_" onClick={() => setStartDate(null)}><HiX /></div>
                </div>}
              </div>
              
              <div>
                <div style={{fontWeight: 600}}>End Date</div>
                {endDate == null && <div className="date-selected-container" style={{fontStyle: 'italic'}}>
                  <div className="date-area">None</div>    
                </div>}
                {endDate != null && <div className="date-selected-container">
                  <div className="date-area"><span style={{fontWeight: 600}}>{month_abbr[endDate.getMonth()]} {endDate.getDate()}</span> {endDate.getFullYear()}</div>
                  <div className="close_" onClick={() => setEndDate(null)}><HiX /></div>
                </div>}
              </div>
  
              {error != null && <div style={{
                fontSize: '0.8rem',
                color: 'red',
                marginTop: '10px'
              }}>
                {error}
              </div>}
  
            </div>
            <div>
              <Button 
                onClick={() => {
                  if (error == null) setShowDatePicker(false);
                }}
                text="Save"
                textColor="white"
                bold={true}
                transformDisabled={true}
                background="#E0777D"
              />
            </div>
          </div>
        </div>
      </div>}
  
      <div style={{
        border: '1px solid #9fb0bd',
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '5px',
        alignItems: 'center',
        cursor: 'pointer'
      }}
        onClick={() => setShowDatePicker(true)}>
  
        <div className="date-time-entry" style={{
          ...DatePillStyle,
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px'
        }}>
          {startDate != null && <React.Fragment>
            <div style={{fontWeight: 600}}>Start Date</div>
            <div>{month_abbr[startDate.getMonth()]} {startDate.getDate()}, {startDate.getFullYear()}</div>  
          </React.Fragment>}
          {startDate == null && <div>
            <div style={{fontWeight: 600}}>Start Date</div>  
          </div>}
        </div>
  
        <div className="date-time-entry" style={DatePillStyle}>
          {endDate != null && <React.Fragment>
            <div style={{fontWeight: 600}}>End Date</div>
            <div>{month_abbr[endDate.getMonth()]} {endDate.getDate()}, {endDate.getFullYear()}</div>  
          </React.Fragment>}
          {endDate == null && <div>
            <div style={{fontWeight: 600}}>End Date</div>  
          </div>}
        </div>
  
        <div style={{
          fontSize: 20,
          transform: `translateY(-4px)`,
          padding: '0 15px'
        }}>
          <FiCalendar/>
        </div>
  
      </div>
  
    </div>)
  }
  
  const month_abbr: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const CalendarPicker = ({month, exclude, onDateSelect}: 
    {month: Date, exclude: Date, onDateChange: (dir: number) => void, onDateSelect: (d: Date) => void}) => {
  
      const [currMo, setCurrMo] = useState<Date>(month);
  
    const getMonthStart = (): Date => {
      let d = new Date(currMo);
      d.setDate(1);
      return d;
    }
  
    const daysInMonth = (month: number, year: number) =>  new Date(year, month, 0).getDate();
  
    return (<div className="calendar-picker no-select">
        
        {/* Header */}
        <div className="calendar-header">
          <div className="month-arrow left">
            <div className="arrow_" onClick={() => {
              let d = new Date(currMo);
              d.setMonth(d.getMonth() - 1);
              setCurrMo(d);
            }}><FiArrowLeft /></div>
          </div>
          <div className="month-name"><span style={{fontWeight: 600}}>{month_abbr[currMo.getMonth()]}</span> {currMo.getFullYear()}</div>
          <div className="month-arrow">
            <div className="arrow_" onClick={() => {
              let d = new Date(currMo);
              d.setMonth(d.getMonth() + 1);
              setCurrMo(d);
            }}><FiArrowRight /></div>
          </div>
        </div>
  
        {/* Calendar Area */}
        <div className="calendar-dates">
  
          <div className="calendar-dows">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dow: string, x: number) => 
              <div className="calendar-dow" key={x}>{dow}</div>
            )}
          </div>
  
          {(() => {
  
            let month_started = false, month_ended = false;
            let prev_month = true;
            let day = 0;
            let max_days = daysInMonth(getMonthStart().getMonth() + 1, getMonthStart().getFullYear());
  
            let rows: any[] = [];
            for (let i = 0; i < 6; ++i) {
  
              let el = (
                <div className="calendar-row" key={i}>
                  {Array.from(new Array(7), (_, x: number) => {
  
                    let alt_date = 0;
                    if (!month_started && !month_ended && x == getMonthStart().getDay()) {
                      month_started = true;
                      prev_month = false;
                      day = 0;
                    }
                    if (!month_ended && day >= max_days) {
                      month_started = false;
                      month_ended = true;
                      day = 0;
                    }
                    ++day;
  
                    let date_ = new Date(getMonthStart());
                    if (month_started && !month_ended) {
                      date_.setDate(day);
                    }
  
                    if (!month_started) {
                      // get the previous month date
                      if (prev_month) {
                        let prev_mo = new Date(getMonthStart());
                        prev_mo.setMonth(prev_mo.getMonth() - 1);
                        alt_date = daysInMonth(prev_mo.getMonth() + 1, prev_mo.getFullYear()) - (getMonthStart().getDay() - day);
                      }
                      else if (month_ended) {
                        alt_date = day;
                      }
                      // get the next month date
                    }
  
                    return (<div 
                      onClick={function (e: any) {
                        if (!e.target.classList.contains('inactive')) onDateSelect(date_);
                      }}
                      className={`calendar-date ${month_started ? '' : 'inactive'} 
                      ${month_started && !month_ended && month.getMonth() == currMo.getMonth() && day == month.getDate() ? 'selected' : ''}
                      ${month_started && !month_ended && month.getMonth() == currMo.getMonth() && 
                        exclude.getMonth() == month.getMonth() && day == exclude.getDate() ? 'exclude' : ''}`} key={x}>
                      {/* {month_started? day : <span>00</span>} */}
                      {month_started && !month_ended && day}
                      {(prev_month || month_ended) && alt_date}
                    </div>);
                  })}
                </div>
              );
  
              rows.push(el);
            }
  
            return rows;
  
          })()}
        </div>
  
      </div>)
  }
  
  const DatePillStyle = {
    padding: '5px 15px',
    flex: 1,
    borderRight: '1px solid #9fb0bd'
  };