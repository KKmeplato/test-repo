### Modal

The `Modal` component is used to display a modal dialog to the user. It is usually used to display a short form or a confirmation dialog.
You can provide the content of the modal by using the `children` prop. Please make sure that the content is short and fits on the screen.

You need to specify the `activator` of the modal by using the `activator` prop. The activator is the element that opens the modal, usually a `Button`.
You need to specify the `title` of the modal by using the `title` prop. It should be a short title, usually a one-liner.
You can specify via `open` prop if the modal is open or not, default is `false`.
You can provide the buttons in the footer, by using the `primaryAction`, `secondaryActions`, and `tertiaryAction` props. `TeritaryAction` is not visible on XS screens.
Each Action consists of the following properties:

- `label`: The label of the button
- `loading`: If the button should be in loading state or not (default is `false`, could be useful when calling backend or doing some other async stuff)
- `onClick`: The callback function when the user clicks on the button

You can act on the following events:

- `onClose`, when the user clicks on the close button.

#### When to use

If you want to display a short form or text to the user, e.g. a confirmation dialog.
The content should be short and fit on the screen.

#### Basic usage (confirm dialog)

```tsx
const UserPage = () => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmed = () => {
    setLoading(true);
    // do your logic here, e.g. call backend (simulated by setTimeout)
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Some page content */}
      <Modal
        open={open}
        activator={
          <Button onClick={handleConfirm} variant="critical">
            Delete user
          </Button>
        }
        primaryAction={{
          label: "Delete user",
          loading: loading,
          onClick: handleConfirmed
        }}
        tertiaryAction={{ label: "Cancel", onClick: handleClose }}
        title="Delete user for real?"
        onClose={handleClose}
      >
        Do you really want to delete the user?
      </Modal>
    </>
  );
};
```

#### Advanced usage (form)

```tsx
const UserPage = () => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [withCatalogDeletion, setWithCatalogDeletion] =
    useState<CheckState>(false);

  const handleConfirm = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmed = () => {
    setLoading(true);
    // do your logic here
    // check if catalog deletion is checked
    if (withCatalogDeletion) {
      // do something
    }

    // Call backend (simulated by setTimeout)
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Some page content */}
      <Modal
        open={open}
        activator={
          <Button onClick={handleConfirm} variant="critical">
            Delete user
          </Button>
        }
        primaryAction={{
          label: "Delete user",
          loading: loading,
          onClick: handleConfirmed
        }}
        tertiaryAction={{ label: "Cancel", onClick: handleClose }}
        title="Delete user for real?"
        onClose={handleClose}
      >
        <p>Do you really want to delete the user?</p>
        <Checkbox
          label="Delete user's catalog"
          checked={withCatalogDeletion}
          onChange={setWithCatalogDeletion}
        />
      </Modal>
    </>
  );
};
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
