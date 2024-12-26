const StackIcons = ({ text }: { text: string }) => {
    return (
        <div>
            <p className="border border-[#e4e5e74c] bg-gradient-to-r from-blue-600 to-purple-400; text-white h-[2.3rem] text-[.9rem] leading-none rounded-md  flex flex-col justify-center items-center text-center">
                {text}
            </p>
        </div>
    );
}

export default StackIcons;