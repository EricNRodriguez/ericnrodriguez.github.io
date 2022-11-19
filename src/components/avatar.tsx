import "./avatar.css";

export type AvatarProps = {
  profileImageSource: string;
  name: string;
};

export const Avatar = (props: AvatarProps) => {
  return (
    <div className="avatar">
      <img src={props.profileImageSource} className="profile-image"/>
      {/*<h3 className="avatar-name"> {props.name} </h3>*/}
    </div>
  )
};
