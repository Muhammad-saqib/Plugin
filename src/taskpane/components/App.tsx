import * as React from "react";
import Progress from "./Progress";
import { DropdownBasicExample } from "./dropdown";
import { PrimaryButton, TextField } from "@fluentui/react";
import { Stack, IStackProps, IStackStyles } from "@fluentui/react";
import { ProjectStageDropDown } from "./projectstagedropdown";
import { DatePickerBasicExample } from "./DatePicker";

/* global require */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}
export default class App extends React.Component<AppProps> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration",
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality",
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro",
        },
      ],
    });
  }

  click = async () => {
    /**
     * Insert your Outlook code here
     */
  };

  stackStyles: Partial<IStackStyles> = { root: { width: 650 } };

  render() {
    const { title, isOfficeInitialized } = this.props;
    const columnProps: Partial<IStackProps> = {
      tokens: { childrenGap: 15 },
      styles: { root: { width: 300 } },
    };

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        <Stack {...columnProps}>
          <TextField label="E-mail address" />
          <DropdownBasicExample />
          <TextField label="Cost Centre[if applicate and different from own cost center]" />
          <TextField label="Additional recipients e-mail" />
          <TextField label="Deal Code or Client Code or Work Type" />
          <ProjectStageDropDown />
          <DatePickerBasicExample />
          <TextField label="New job or existing job ticket?.if exist ,provide the ticket number" />
          <TextField label="Attachments(e.g mark-up,base document,rider files,links to website)" />
          <TextField label="Comments/Instruction" />
          <PrimaryButton ariaDescription="Submit Ticket.">Submit Request</PrimaryButton>
        </Stack>
      </div>
    );
  }
}
