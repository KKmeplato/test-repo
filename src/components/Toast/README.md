### Toast

The Toast component is used to display a short message to the user. It is usually used to display a message after an action has been performed.
The Toast position is fixed to the bottom center of the screen.
You cannot use Toast component directly. You have to use `useToast` hook to create a Toast.

You can specify the `duration` after which the Toast will be closed automatically, default is 3000ms.
You can set `critical` to true to display a critical message.
You can specify the message by `message` prop.
You can act on the `onClose` event to perform an action when the Toast is closed. Either by the user or automatically.
You can specify an action button text by `action` prop. In addition to that you can act on the `onAction` event to perform an action when the user clicks on the action button. In this case Toast will also be closed, but without the `onClose` event being triggered.

#### When to use

#### Basic usage

```tsx
const Foo = () => {
  const { create } = useToast();

  const handleClick = () => {
    create({
      message: "User deleted",
      onClose: () => console.log("Toast closed")
    });
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Delete user
    </Button>
  );
};
```

#### Basic usage with action

```tsx
const Foo = () => {
  const { create } = useToast();

  const handleClick = () => {
    create({
      message: "User deleted",
      action: "Undo",
      onAction: () => console.log("Undo logic"),
      onClose: () => console.log("Toast closed")
    });
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Delete user
    </Button>
  );
};
```

#### Critical Toast

```tsx
const Foo = () => {
  const { create } = useToast();

  const handleClick = () => {
    create({
      message: "User not deleted",
      critical: true,
      action: "Retry",
      onAction: () => console.log("Retry logic"),
      onClose: () => console.log("Toast closed")
    });
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Delete user
    </Button>
  );
};
```

- [x] Meplato light theme
- [x] Meplato dark theme
- [x] Webridge light theme
- [x] Webridge dark theme
