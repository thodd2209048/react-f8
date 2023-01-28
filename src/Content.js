import { useEffect, useState } from "react";

function Content() {
  const [avatar, setAvatar] = useState();

  const handlePreview = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    if (avatar) {
      URL.revokeObjectURL(avatar.preview);
    }
  };

  return (
    <div>
      <input type="file" onChange={handlePreview} />
      <img src={avatar.preview} style={{ width: "80%" }} alt="" />
    </div>
  );
}

export default Content;
