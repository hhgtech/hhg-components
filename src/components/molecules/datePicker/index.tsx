import React, { useEffect, useRef, useState } from 'react'

import { format } from 'date-fns'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { StyledCaptionWrapper, StyledPickerContainer } from './index.styled'

export type Props = {
  placeholder?: string
  displayDateFormat?: string
  pickedDate?: Date
  customInput?: React.FunctionComponent
  onChange?: (d: Date) => void
  className?: string
}

const DatePicker = ({
  placeholder,
  displayDateFormat,
  onChange,
  customInput: CustomInput,
  pickedDate,
  className,
}: Props) => {
  const isDatePickerShown = useRef(false)
  const dateFormatter = format
  const [month, setMonth] = useState(new Date())

  const datePickerContainer = useRef<HTMLDivElement>(null)
  const datePicker = useRef<DayPickerInput>(null)
  const defaultDateFormatString = 'yyyy-MM-dd'

  const handleDaysSelect = (day: Date) => {
    datePicker.current && datePicker.current.hideDayPicker()
    onChange && onChange(day)
  }

  const handleDayChanged = (selectedDay: Date) => {
    handleDaysSelect(selectedDay)
  }

  const formatPickerDate = (date: Date, format: string) => {
    console.log(format)
    return dateFormatter(date, format)
  }

  const handleDateClick = (e: any) => {
    if (
      !datePickerContainer.current ||
      !datePickerContainer.current.contains(e.target)
    ) {
      datePicker.current && datePicker.current.hideDayPicker()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleDateClick, false)
    return () => {
      document.removeEventListener('mousedown', handleDateClick, false)
    }
  }, [])

  // customise the drop downs for Month and year
  const currentYear = new Date().getFullYear()
  const fromMonth = new Date(currentYear - 150, 0)
  const toMonth = new Date(currentYear + 1, 0)

  const YearMonthForm = ({
    date,
    localeUtils,
    onChange,
  }: {
    date: Date
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    localeUtils: any
    onChange: (d: Date) => void
  }) => {
    const months = localeUtils.getMonths()

    const years = []
    for (let i = toMonth.getFullYear(); i >= fromMonth.getFullYear(); i -= 1) {
      years.push(i)
    }

    const handleChange = function handleChange(
      e: React.ChangeEvent<HTMLSelectElement>,
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { year, month } = e.target.form as any
      onChange(new Date(year.value, month.value))
    }

    return (
      <div className="DayPicker-Caption">
        <StyledCaptionWrapper>
          <select name="month" onChange={handleChange} value={date.getMonth()}>
            {months.map((month: string, i: number) => (
              <option key={month} value={i}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="year"
            onChange={handleChange}
            value={date.getFullYear()}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </StyledCaptionWrapper>
      </div>
    )
  }

  const CaptionElement = ({
    date,
    localeUtils,
  }: {
    date: Date
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    localeUtils: any
  }) => {
    return (
      <YearMonthForm
        date={date}
        localeUtils={localeUtils}
        onChange={setMonth}
      />
    )
  }

  return (
    <StyledPickerContainer className={className} ref={datePickerContainer}>
      <DayPickerInput
        ref={datePicker}
        inputProps={{
          readOnly: true,
        }}
        keepFocus={false}
        classNames={{
          container: 'pickerContainer',
          overlayWrapper: 'pickerOverlayWrapper',
          overlay: 'pickerOverlay',
        }}
        component={React.forwardRef((props: any, ref: any) => (
          <CustomInput {...props} />
        ))}
        onDayPickerHide={() => {
          isDatePickerShown.current = false
        }}
        onDayPickerShow={() => {
          isDatePickerShown.current = true
        }}
        dayPickerProps={{
          month: month,
          className: 'picker',
          selectedDays: pickedDate,
          canChangeMonth: true,
          enableOutsideDaysClick: true,
          firstDayOfWeek: 1,
          captionElement: CaptionElement,
        }}
        format={displayDateFormat || defaultDateFormatString}
        formatDate={formatPickerDate}
        hideOnDayClick={true}
        placeholder={placeholder || ''}
        onDayChange={handleDayChanged}
      />
    </StyledPickerContainer>
  )
}

export { DatePicker }
