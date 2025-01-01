
const ContactIcon = () => {
    return (
        <>
            <div className="h-[100px] md:h-[200px] w-full justify-between grid mt-9 mb-9 gap-4 grid-cols-3 md:grid-cols-9">
                <a href="https://www.linkedin.com/in/juanbautistavega/" className="linkedin icon-contact md:col-span-3">LinkedIn</a>
                <a href="https://github.com/bautistaJuan" className="github icon-contact md:col-span-3">Github</a>
                <a href="mailto:vegajuancontact@gmail.com" className="email icon-contact md:col-span-3">Email</a>
            </div>
        </>
    )
}

export default ContactIcon