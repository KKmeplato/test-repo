import { action } from "@storybook/addon-actions";
import { useArgs, useEffect, useState } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import { FormEvent, useCallback, useRef } from "react";

import { ActionList } from "components/ActionList";
import { Button } from "components/Button";
import { CheckState, Checkbox } from "components/Checkbox";
import { InputField } from "components/InputField";

import { Modal } from "./Modal";
import { Action, ModalProps } from "./types";

const meta: Meta<typeof Modal> = {
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithArgs = (args: ModalProps) => {
  const [, updateArgs] = useArgs<ModalProps>();
  const [target, setTarget] = useState("");
  const [primaryLoading, setPrimaryLoading] = useState(false);

  const [ddos, setDdos] = useState<CheckState>(false);
  const [sql, setSql] = useState<CheckState>(false);
  const [xss, setXss] = useState<CheckState>(false);

  const clearAll = () => {
    setTarget("");
    setDdos(false);
    setSql(false);
    setXss(false);
  };

  useEffect(() => {
    if (typeof args.open === "boolean" && !args.open) {
      clearAll();
      setPrimaryLoading(false);
    }
  }, [args.open, updateArgs]);

  const handleStartHack = () => {
    updateArgs({ open: true });
  };

  const handleClick = (name: string) => {
    action("click")(name);

    if (name === "primary") {
      setPrimaryLoading(true);
      // Simulate some async action on a click
      setTimeout(() => {
        updateArgs({ open: false });
      }, 2000);
    } else {
      updateArgs({ open: false });
    }
  };

  const handleClose = () => {
    action("close")();
    updateArgs({ open: false });
  };

  const primaryAction: Action = {
    label: "Start hack",
    loading: primaryLoading,
    onClick: () => handleClick("primary")
  };

  const secondaryActions: Action[] = [
    {
      label: "Go back",
      onClick: () => handleClick("secondary")
    }
  ];

  const tertiaryAction: Action = {
    label: "Cancel",
    onClick: () => handleClick("tertiary")
  };

  return (
    <>
      <Modal
        {...args}
        activator={
          <Button variant="primary" onClick={handleStartHack}>
            Start new hack
          </Button>
        }
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        tertiaryAction={tertiaryAction}
        onClose={handleClose}
      >
        <div className="flex w-full flex-col gap-4">
          <InputField
            label="Hack target"
            prefix="URL"
            value={target}
            onChange={setTarget}
          />
          <Checkbox
            label="DDoS"
            value="ddos"
            checked={ddos}
            onChange={setDdos}
          />
          <Checkbox
            label="SQL Injection"
            value="sql"
            checked={sql}
            onChange={setSql}
          />
          <Checkbox label="XSS" value="xss" checked={xss} onChange={setXss} />
        </div>
      </Modal>
    </>
  );
};

const SimpleModalWithArgs = (args: ModalProps) => {
  const [, updateArgs] = useArgs<ModalProps>();
  const formRef = useRef<HTMLFormElement>(null);
  const [primaryLoading, setPrimaryLoading] = useState(false);

  useEffect(() => {
    if (typeof args.open === "boolean" && !args.open) {
      setPrimaryLoading(false);
    }
  }, [args.open, updateArgs]);

  const handleStartDelete = () => {
    updateArgs({ open: true });
  };

  const handleClick = (name: string) => {
    action("click")(name);

    if (name === "primary") {
      formRef.current?.requestSubmit();
    } else {
      updateArgs({ open: false });
    }
  };

  const handleClose = () => {
    action("close")();
    updateArgs({ open: false });
  };

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPrimaryLoading(true);
      // Simulate some async action on a click
      setTimeout(() => {
        updateArgs({ open: false });
      }, 1500);
    },
    [updateArgs]
  );

  const primaryAction: Action = {
    label: "Delete user",
    loading: primaryLoading,
    onClick: () => handleClick("primary")
  };

  const secondaryActions: Action[] = [
    {
      label: "Cancel",
      onClick: () => handleClick("secondary")
    }
  ];

  return (
    <>
      <p className="py-4">
        Some content behind the modal to check whether it can be clicked
      </p>
      <p className="py-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique
        commodi illum. Eligendi cum inventore iusto beatae laborum deleniti id,
        distinctio magni illo necessitatibus unde quo voluptatibus ullam!
        Veniam, iste?
      </p>
      <h2 className="pb-4 text-lg font-bold">User data</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-lg border p-4"
      >
        <InputField label="ID" preview value="42" onChange={() => {}} />
        <InputField label="Firstname" value="John" onChange={() => {}} />
        <InputField label="Lastname" value="Doe" onChange={() => {}} />
        <InputField
          label="Email"
          value="john.doe@meplato.com"
          onChange={() => {}}
        />
        <div>
          {/* important to set button type, otherwise it will be "submit" */}
          <Modal
            {...args}
            activator={
              <Button
                variant="primary"
                type="button"
                onClick={handleStartDelete}
              >
                Delete user
              </Button>
            }
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            onClose={handleClose}
          >
            Do you really want to delete the user?
          </Modal>
        </div>
      </form>
      <div className="p-4">
        <h3 className="pb-4">random action list, only for z-index check</h3>
        <ActionList
          sections={[
            {
              items: [
                {
                  children: "Import",
                  onClick: action("actionlist-import")
                }
              ]
            },
            {
              title: "Bulk actions",
              items: [
                {
                  children: "Archive",
                  variant: "critical",
                  onClick: action("actionlist-archive")
                }
              ]
            }
          ]}
        />
      </div>
    </>
  );
};

const SpecialModalWithArgs = (args: ModalProps) => {
  const [, updateArgs] = useArgs<ModalProps>();

  const handleStart = () => {
    updateArgs({ open: true });
  };

  const handleClose = () => {
    action("close")();
    updateArgs({ open: false });
  };

  return (
    <>
      <p className="py-4">
        Some content behind the modal to check whether it can be clicked
      </p>
      <p className="py-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique
        commodi illum. Eligendi cum inventore iusto beatae laborum deleniti id,
        distinctio magni illo necessitatibus unde quo voluptatibus ullam!
        Veniam, iste?
      </p>
      <Modal
        {...args}
        activator={
          <Button variant="success" onClick={handleStart}>
            Click me
          </Button>
        }
        onClose={handleClose}
      >
        I just want to tell you that you&apos;re perfect the way you are.
      </Modal>
    </>
  );
};

const createComplexStory = ({
  title
}: Omit<
  Partial<ModalProps>,
  | "activator"
  | "onClose"
  | "primaryAction"
  | "secondaryActions"
  | "tertiaryAction"
>): Story => ({
  args: {
    title
  },
  render: ModalWithArgs
});

const createSimpleStory = ({
  title
}: Omit<
  Partial<ModalProps>,
  | "activator"
  | "onClose"
  | "primaryAction"
  | "secondaryActions"
  | "tertiaryAction"
>): Story => ({
  args: {
    title
  },
  render: SimpleModalWithArgs
});

const createSpecialStory = ({
  title
}: Omit<
  Partial<ModalProps>,
  | "activator"
  | "onClose"
  | "primaryAction"
  | "secondaryActions"
  | "tertiaryAction"
>): Story => ({
  args: {
    title
  },
  render: SpecialModalWithArgs
});

export const ComplexContent = createComplexStory({
  title: "What do you want to hack?"
});

export const TextOnlyContent = createSimpleStory({
  title: "Delete user for real?"
});

export const WithoutFooter = createSpecialStory({
  title: "You're perfect the way you are"
});
