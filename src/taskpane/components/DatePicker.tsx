import * as React from "react";
import { DatePicker, DayOfWeek, mergeStyles, defaultDatePickerStrings } from "@fluentui/react";

const rootClass = mergeStyles({ maxWidth: 300, selectors: { "> *": { marginBottom: 15 } } });

export const DatePickerBasicExample: React.FunctionComponent = () => {
  const [firstDayOfWeek] = React.useState(DayOfWeek.Sunday);
  return (
    <div className={rootClass}>
      <DatePicker
        firstDayOfWeek={firstDayOfWeek}
        placeholder="Select a date..."
        ariaLabel="Prefered deadline"
        label="Prefered deadline"
        // DatePicker uses English strings by default. For localized apps, you must override this prop.
        strings={defaultDatePickerStrings}
      />
    </div>
  );
};
