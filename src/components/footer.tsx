import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <span>Created by Attila with</span>
                        <Image className="dev" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="next.js logo" width={35} height={35}/>
                        <span>and</span>
                        <Image className="dev" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="typescript logo" width={35} height={35}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
