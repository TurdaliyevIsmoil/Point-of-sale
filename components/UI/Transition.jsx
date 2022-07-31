import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  "z-index": 99,
};

const transitionStyles = {
  entering: { display: "block" },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { display: "none" },
};

const TransitionComponent = ({ children, inprop }) => {
  return (
    <Transition in={inprop} timeout={duration}>
      {(state) => (
        <div
          className="z-[100] relative"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default TransitionComponent;
