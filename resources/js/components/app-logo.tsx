import AppLogoIcon from '../../../public/assets/iconImage/favIcon.png';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-md">
                    <img src={AppLogoIcon} alt="Logo" className="size-8" />
                </div>
                {/* <AppLogoIcon/> */}
                <div className="ml-1 grid flex-1 text-left text-lg">
                    <span className="mb-0.5 truncate leading-tight font-semibold">
                        Admin Floratify.
                    </span>
                </div>
            </div>
        </>
    );
}
