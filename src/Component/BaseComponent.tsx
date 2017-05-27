import * as React from 'react';

abstract class BaseComponent<Props, State> extends React.Component<Props, State> {

  render(): React.ReactElement<{}> {
    let result: React.ReactElement<{}>;
    try {
        result = this.doRender();
    } catch (error) {
        this.logError(error);
        result = this.errorTemplate();
    }

    return result;
  }

  errorTemplate(): React.ReactElement<{}> {
    return (
      <div>An error orccured </div>
    );
  }

  abstract doRender(): React.ReactElement<{}>

  logError(error: Error): void {
    /* tslint:disable */
    //There be dragons.
    const componentName: string = (this as any)._reactInternalInstance._currentElement.type.name;

    console.log("An error occurred while "+
    "rendering the component, ", componentName)
    console.error(error)
    /* tslint:enable */

  }
}

export default BaseComponent;
