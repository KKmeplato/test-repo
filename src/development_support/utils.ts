export const hideStorybookControls = (controls: string[]) =>
  controls.reduce(
    (acc, current) => ({
      ...acc,
      [current]: { table: { disable: true } }
    }),
    {}
  );
