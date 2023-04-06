## React layout manager - is library for splitting your scrreen on draggable & resizable content/
### Try online demo (https://react-layout-manager.herokuapp.com/)
![image](https://user-images.githubusercontent.com/10614750/230366968-b826feb3-35f5-41c5-a461-c651eb74866c.png)
## Usage
### 1. Create some layout layout object.
```
export const LAYOUT: ILayout = {
  rows: [
    {
      cells: [
        { viewName: "json" },
        { viewName: "code-editor" },
        { viewName: "console" },
      ],
    },
  ],
};
```

### 2. Add useLayout hook && LayoutContext.
```
const layout = useLayout({
  defaultLayout: LAYOUT,
});

<LayoutContext layout={layout}>
    <Layout
      renderView={({ draggableProps }): JSX.Element => (
        <div className="card-header-icon" {...draggableProps}>
          <Icon name={ICONS.DRAG_HANDLE} color={"white"} size={16} />
        </div>
      )}
    />
  </LayoutContext>
```

### 3. Result
![image](https://user-images.githubusercontent.com/10614750/230370032-26a1a2d7-5c4b-4461-a8cb-928afae41e99.png)

