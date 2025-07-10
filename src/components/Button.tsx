import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  text: string;
  icon: ReactNode;
  iconPosition?: "left" | "right";
  color?: string;
  textColor?: string;
}

type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type" | "onClick"> & {
  href: string;
  download?: boolean;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  download?: undefined;
}

type Props = AnchorProps | ButtonProps;

export default function Button(props: Props) {
  const {
    iconPosition = "left",
    color = "bg-primary-color-500",
    textColor = "text-primary",
  } = props

  const classes = `${color} ${textColor} flex items-center gap-2 px-6 py-4 rounded-xl transition-colors text-text-primary border-2 border-transparent hover:border-text-primary ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}`

  if ("href" in props && props.href) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { text, icon, iconPosition, color, textColor, ...anchorProps } = props as AnchorProps;
    return (
      <a 
        className={classes}
        {...anchorProps}
      >
        {icon}
        <span>{text}</span>
      </a>
    )
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { text, icon, iconPosition, color, textColor, ...buttonProps } = props as ButtonProps;
    return (
    <button className={classes} {...buttonProps}>
      {icon}
      <span>{text}</span>
    </button>
  )
  }
}