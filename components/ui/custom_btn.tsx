"use client";

import { CustomButtonDrops } from "@/types";
import Image from "next/image";

function CustomButton({
  isDisable,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonDrops) {
  return (
    <button
      disabled={isDisable}
      type={btnType}
      className={`${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`${textStyles}`}>{title}</span>
      {rightIcon && (
        <div>
          <Image src={rightIcon} alt="right_icon" />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
