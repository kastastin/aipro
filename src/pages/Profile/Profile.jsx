import { Avatar, ConfigProvider, theme } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import { useUser } from "../../features/authentication/useUser";
import { useUpdateUserAvatar } from "../../features/authentication/useUpdateUserAvatar";
import { useUpdateUserAicoin } from "../../features/authentication/useUpdateUserAicoin";

import ProfileCard from "./ProfileCard";

import iconPencil from "./../../assets/pencil.svg";
import ButtonForIcon from "../../ui/ButtonForIcon";

import "./Profile.scss";
import { useEffect } from "react";

function Profile() {
	const { user } = useUser();
	const { aicoin, avatar, avatar_url, fullName } = user.user_metadata;
	const { updateUserAicoin } = useUpdateUserAicoin();
	const { updateUserAvatar, isUpdating } = useUpdateUserAvatar();
	
	
	useEffect(() => {
		if(typeof(aicoin) != Number) {updateUserAicoin(user?.id)};
	}, [aicoin]);

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
			}}
		>
			<div className="wrapper">
				<div className="profile">
					<div className="profile__head">
						<div className="user-info">
							<div className="user-photo">
								{avatar ? (
									<Avatar src={avatar} />
								) : avatar_url ? (
									<Avatar src={avatar_url} />
								) : (
									<Avatar icon={<UserOutlined />} />
								)}
								<div className="send-photo">
									<input
										type="file"
										name="myImage"
										id="sendPhoto"
										accept="image/*"
										disabled={isUpdating}
										onChange={(e) => {
											updateUserAvatar(e.target.files[0]);
										}}
									/>
									<label htmlFor="sendPhoto">
										<img src={iconPencil} />
									</label>
								</div>
							</div>
							<div className="user-info__name">{fullName}</div>
							<div className="user-info__balance">
								Вalance: {aicoin} AiCoin
								<ButtonForIcon
									icon={<InfoCircleOutlined style={{ color: "#24A1E0" }} />}
								/>
							</div>
						</div>
					</div>

					<ProfileCard />
				</div>
			</div>
		</ConfigProvider>
	);
}

export default Profile;
