import { ThemeProps } from 'src/misc/theme'
import styled from 'styled-components'

export const StyledPickerContainer = styled.div`
  .pickerContainer {
    position: relative;
    padding-top: 0;
    & > div > svg {
      position: absolute;
      top: 36px;
      right: 16px;
      cursor: pointer;
    }

    & > :not(:first-child) {
      position: absolute;
      z-index: 1;
      width: 100%;
    }
  }

  .pickerOverlay {
    margin-top: 6px;
    background: white;
    border-radius: 6px;
    box-shadow: 0px 6px 12px rgba(67, 86, 100, 0.2);
  }

  .picker {
    width: 100%;
  }

  .react-datepicker-popper {
    .react-datepicker {
      display: flex;
      width: 340px;
      height: 305px;
      align-items: center;
      justify-content: center;
      border: none;
      box-shadow: (-1px 1px 2px rgba(67, 70, 74, 0.0001)),
        (-2px 2px 5px rgba(67, 86, 100, 0.123689));
    }

    .svg {
      cursor: pointer;
      stroke: ${(props: ThemeProps) => props.theme.colors.gray800};
    }
    .react-datepicker__day {
      width: 40px;
    }

    .react-datepicker__header {
      border-bottom: 0;
      background-color: white;
    }

    .react-datepicker__day--outside-month {
      color: #e9e9e9;
    }

    .react-datepicker__day {
      font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--today,
    .react-datepicker__day--selected:hover,
    .react-datepicker__day--keyboard-selected {
      width: 32px;
      height: 30px;
      margin: 4px;
      margin-bottom: -2px;
      background: ${(props: ThemeProps) => props.theme.colors.primaryBase};
      border-radius: 50%;
    }

    .react-datepicker__day-name {
      width: 40px;
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__header.react-datepicker__header--custom {
      svg {
        stroke: #262626;
      }
      select {
        background: ${(props: ThemeProps) => props.theme.colors.neutral100};
        text-align: center;
        &:not(:last-child) {
          padding: 8px 10px;
          margin-right: 15px;
          border-radius: 6px;
        }
      }
    }
  }

  /* DayPicker styles */

  .DayPicker {
    display: inline-block;
    font-size: 1rem;
  }

  .DayPicker-wrapper {
    position: relative;

    flex-direction: row;
    padding-bottom: 1em;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    display: table;
    margin: 0 1em;
    margin-top: 1em;
    border-collapse: collapse;
    border-spacing: 0;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }

  .DayPicker-NavBar {
  }

  .DayPicker-NavButton {
    position: absolute;
    top: 35px;

    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    margin-top: 2px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    color: #8b9898;
    cursor: pointer;
  }

  .DayPicker-NavButton:hover {
    opacity: 0.8;
  }

  .DayPicker-NavButton--prev {
    top: 24px;
    left: 2px;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 9L1 5L5 1' stroke='%23262626' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }

  .DayPicker-NavButton--next {
    top: 24px;
    right: 2px;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L1 9' stroke='%23262626' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    width: 100%;
    text-align: center;
  }

  .DayPicker-Caption > div {
    font-size: 1.15em;
    font-weight: 500;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1em;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    padding: 0.5em;
    color: #8b9898;
    font-size: 0.875em;
    text-align: center;
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
  }

  .DayPicker-WeekNumber {
    display: table-cell;
    min-width: 1em;
    padding: 0.5em;
    border-right: 1px solid #eaecec;
    color: #8b9898;
    cursor: pointer;
    font-size: 0.75em;
    text-align: right;
    vertical-align: middle;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    padding-top: 0.5em;
  }

  .DayPicker-TodayButton {
    border: none;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    color: #4a90e2;
    cursor: pointer;
    font-size: 0.875em;
  }

  /* Default modifiers */

  .DayPicker-Day--today {
    color: #d0021b;
    font-weight: 700;
  }

  .DayPicker-Day--outside {
    color: #8b9898;
    cursor: default;
  }

  .DayPicker-Day--disabled {
    color: #dce0e0;
    cursor: default;
    /* background-color: #eff1f1; */
  }

  /* Example modifiers */

  .DayPicker-Day--sunday {
    background-color: #f7f8f8;
  }

  .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #dce0e0;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;

    background-color: ${(props: ThemeProps) => props.theme.colors.primaryBase};
    color: #f0f8ff;
    font-weight: ${(props: ThemeProps) => props.theme.sizes.fwBold};
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #51a0fa;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #f0f8ff;
  }

  /* DayPickerInput */

  .DayPickerInput {
    display: inline-block;
  }

  .DayPickerInput-OverlayWrapper {
    position: relative;
  }

  .DayPickerInput-Overlay {
    position: absolute;
    z-index: 1;
    left: 0;

    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
`

export const StyledCaptionWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > :first-child {
    margin-right: 10px;
  }

  & * {
    padding: 10px 10px;
    background: ${(props: ThemeProps) => props.theme.colors.neutral100};
    border-radius: 6px;
  }
`
