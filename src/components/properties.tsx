import "./properties.scss";

export type PropertiesProps = {
    children: JSX.Element[];
    expandWidth?: boolean;
};

export const Properties = ({children, expandWidth}: PropertiesProps) => {
    return (
      <div className={`properties ${expandWidth === false ? "" : "expanded"}`} >
        <table>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    )
};

export type PropertyProps = {
    property: string;
    value: string | number | boolean;
    private?: boolean;
};

export const Property = (props: PropertyProps) => {
    return (
      <tr className={`property-wrapper ${props.private === true ? "private" : ""}`}>
        <td className="property-key">
          {props.property.toString()}
        </td>
        <td className="property-value">
          {props.value.toString()}
        </td>
      </tr>
    );
};
