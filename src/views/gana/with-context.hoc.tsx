import * as React from 'react';

/* 
  Typing here does not work properly. It always returns a component of <any> 
  but I can't figure out how to properly type this situation.
  I'll leave it as is until someone figures out the proper way to do it.
  The HOC is somewhat similar to https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858
  but that uses a single typed prop to send all other props through, an aproach I did not like.
*/
export function withContextAsProps<P, C>(
  Component: React.ComponentType<P>,
  Context: React.Context<C>,
): React.SFC<P & C> {
  return function OuterComponent(props: P) {
    return (
      <Context.Consumer>
        {context => {
          return <Component {...props} {...context} />;
        }}
      </Context.Consumer>
    );
  };
}
