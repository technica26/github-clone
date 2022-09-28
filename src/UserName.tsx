interface UserNameProps{
    firstName:string;
    lastName:string;
}

export const UserName = (props: UserNameProps) => {//usenameの引数がprops(props.name)
    const {firstName,lastName} = props
    return <div>{firstName}{lastName}</div>
}