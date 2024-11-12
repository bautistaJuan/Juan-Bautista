const StackIcons = ({ text, index }: { text: string, index: number }) => {
    return (
        <div key={index * 2}>
            <p className="border border-[#E4E5E7] bg-[#222325] text-white h-[2.3rem] text-[.9rem] leading-none rounded-md flex flex-col justify-center items-center text-center">
                {text}
            </p>
        </div>
    );
}

export default StackIcons;