# react-easy-responsive

- A powerful yet simple React library designed to make responsive, inline styling easy and intuitive. react-easy-responsive allows you to conditionally apply styles based on device properties like screen size, orientation, OS, and more, directly within your React components. Ideal for developers who want to create clean, responsive designs without external CSS or complex media queries.

- With react-easy-responsive, your React components can adapt seamlessly to any device, providing a smooth, consistent user experience.

## Key Features
- Responsive Inline Styling: Easily define CSS inline based on changing device properties.
- Hooks-Driven: Leverage React hooks to detect screen size, orientation, OS, etc., for dynamic styling.
- Simple Conditional Styling: Apply styles based on conditions, like device type or orientation, without needing complex breakpoints.
- Device-Specific Adaptation: Supports flexible font sizes, device dimensions, and layout shifts based on the detected device.
- Easy Integration: Works smoothly with existing React UI frameworks or component libraries.

## Device Screen

- this use hooks for trigger condition effect like inner to get window size and resize

#### install with npm

`npm i react-easy-responsive`

#### install with yarn

`yarn add react-easy-responsive`

```js
const device: DeviceScreens = useDeviceScreen();

const { rootFontSize, rootDpFontSize } = device;
```

#### Type value

```js
rootFontSize: number;
rootDpFontSize: number;
innerDimension: ScreenDimension;
currentDimension: ScreenDimension;
avlDimension: ScreenDimension;
orientation: Orientation;
pxRasio: number;
os: Os;
type: ScreenType;
fontSize: PortSize;
dpFontSize: PortSize;
deviceType: DeviceType;
```

## Style Sheet

- this use hooks for trigger condition regenerate css with default and conditional rendering with state etc.
- making simple conditional rendering react code with callback and device & screen identification detect size, os, dimension, orientation, and use fontsize to define root fontsize in css root

### Quick Example

- Make responsive design easy and efficient with react-easy-responsive—the ideal tool for building dynamic, device-adaptive React applications!

```js
import { useDeviceScreen, useResponsive } from 'react-easy-responsive';

const App = () => {
  const device = useDeviceScreen();
  const cssrr = useResponsive();

  return (
    <div
      style={cssrr(
        ({ fontSize }) => ({
          fontSize: fontSize.md,
          display: "flex",
          flexDirection: "column",
        }),
        ({ os }) => ({
          condition: os === "ANDROID",
          style: { flexDirection: "row" },
        })
      )}
    >
      {device.os}
    </div>
  );
};

```

##### - creating Component with animation

```js
const Caraousel = () => {
  const [current, setCurrent] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const { themeApp } = useState("dark");
  const cssrr = useResponsive();

  useEffect(() => {
    setIsNext(true);
    const interval = setInterval(() => {
      if (current === items(themeApp).length) setCurrent(1);
      else setCurrent(current + 1);
    }, 6 * 1000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      style={cssrr(() => ({
        width: "55%",
        position: "relative",
        overflow: "hidden",
      }))}
    >
      <div
        style={cssrr(() => ({
          background: "#49A19D",
          opacity: "0.5",
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "1",
        }))}
      ></div>
      <div
        style={cssrr(({ dpFontSize }) => ({
          position: "absolute",
          width: "100%",
          zIndex: "10",
          padding: dpFontSize.md,
          display: "flex",
          flexDirection: "column",
          gap: dpFontSize.lg,
        }))}
      >
        <div
          style={cssrr(() => ({
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }))}
        >
          <div style={cssrr(() => ({ display: "flex", gap: "0.25rem" }))}>
            {bullets?.map((_e, i) => {
              return (
                <div
                  style={cssrr(() => ({
                    borderRadius: "50%",
                    width: "0.75rem",
                    height: "0.75rem",
                    border: "solid 2px #FFFFFF",
                    ...(i + 1 === current && { background: "#FFFFFF" }),
                  }))}
                  onClick={() => {
                    let idx = i + 1;
                    if (current < idx) {
                      setIsNext(true);
                    } else {
                      setIsNext(false);
                    }
                    setCurrent(idx);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <style>
            {`
            @keyframes next {
            0% {
              left: 100%
              }
            100% {
              left: 0%
              }
            }

            @keyframes back {
            0% {
              left: 0%
              }
            100% {
              left: 100%
              }
            }

            @keyframes in-out {
            0% {
              opacity: 1
            }
            100% {
              opacity: 0,
            }
            }  

            @keyframes out-in {
            0% {
              opacity: 0
            }
            100% {
              opacity: 1,
            }
            } 
            `}
          </style>
          {items(themeApp).map((e, i) => {
            return (
              <img
                style={cssrr(
                  () => ({
                    position: "absolute",
                    zIndex: i + 1,
                    opacity: 0,
                  }),
                  ({ orientation }) => ({
                    condition:
                      current === i + 1 && isNext && orientation.current.POTRET,
                    style: {
                      animationDuration: "2s",
                      animationTimingFunction:
                        "cubic-bezier(0.62,0.05,0.01,0.99)",
                      animationName: "next",
                      zIndex: 100,
                      opacity: 1,
                    },
                  }),
                  () => ({
                    condition: current - 1 === i + 1 && isNext,
                    style: {
                      zIndex: i + 1,
                      animationName: "in-out",
                      animationDuration: "4s",
                      animationTimingFunction:
                        "cubic-bezier(0.62,0.05,0.01,0.99)",
                      animationFillMode: "forwards",
                    },
                  }),
                  () => ({
                    condition: current === i + 1 && !isNext,
                    style: {
                      animationDuration: "4s",
                      animationTimingFunction:
                        "cubic-bezier(0.62,0.05,0.01,0.99)",
                      animationName: "out-in",
                      zIndex: 100,
                      opacity: 1,
                      animationFillMode: "forwards",
                    },
                  }),
                  () => ({
                    condition: current + 1 === i + 1 && !isNext,
                    style: {
                      zIndex: i + 1,
                      animationName: "back",
                      animationDuration: "2s",
                      animationTimingFunction:
                        "cubic-bezier(0.62,0.05,0.01,0.99)",
                      opacity: 1,
                    },
                  }),
                  () => ({
                    condition: current > i + 1,
                    style: {
                      zIndex: i + 1,
                      opacity: 0,
                    },
                  })
                )}
                src={e?.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const items = (theme: ThemesAppType) => {
  return [
    {
      imageUrl: `/images/carousel/one-${temp}.png`,
    },
    {
      imageUrl: `/images/carousel/two-${temp}.png`,
    },
    {
      imageUrl: `/images/carousel/three-${temp}.png`,
    },
  ];
};

const bullets = [{}, {}, {}];
```

#### - Solve error hooks call in out component

```js
// conditional rendering error

const [isAndroid, setIsAndroid] = useState(false);

const { os } = useDeviceScreen();

const cssrr = useResponsive();

/**
 * ERROR BAD CODE like this error because useResponsive use Hooks in returning css
 * hook only can be use in first line
 */

return (
  <div>
    {isAndroid && (
      <div
        style={cssrr(
          ({ fontSize }) => ({
            fontSize: fontSize.md,
            display: "flex",
            flexDirection: "column",
          }),
          ({ os }) => ({
            condition: os === Os.ANDROID,
            style: {
              flexDirection: "row",
            },
          })
        )}
      >
        android
      </div>
    )}
  </div>
);
```

##### - Problem 

```js
// the code above like this because useResponsive using hooks in inline but any conditional
if (true) {
  const [state, setState] = useState();
}

// react can be error
```

##### - Resolve

```js
// RESOLVE GOOD CODE for conditional only

let style = cssrr(
  ({ fontSize }) => ({
    fontSize: fontSize.md,
    display: "flex",
    flexDirection: "column",
  }),
  ({ os }) => ({
    condition: os === Os.ANDROID,
    style: {
      flexDirection: "row",
    },
  })
);

return <div>{isAndroid && <div style={style}>android</div>}</div>;
```
