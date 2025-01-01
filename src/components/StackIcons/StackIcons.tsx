const StackIcons = ({ text }: { text: string }) => {
    return (
        <>
            <p className="border border-[#e4e5e74c] bg-gradient-to-br from-blue-600 to-purple-400; text-white h-[2.3rem] md:h-[4rem] text-[.9rem] md:text-[1.1rem] font-semibold leading-tight rounded-md flex flex-col justify-center text-center">
                {text}
            </p>
        </>
    );
}

export default StackIcons;