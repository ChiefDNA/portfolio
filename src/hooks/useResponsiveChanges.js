import { useEffect } from "react"


export default function useResponsiveChanges(sidebarId){
    useEffect(()=>{
        const sidebar = document.getElementById(sidebarId);
        if(!sidebar) return;

        const responsive = {
            sidebar: document.getElementById(sidebarId),
            first_load: true,
        };

        // const switch_class = () => {
        //     responsive.sidebar.classList.toggle('responsive');
        //     responsive.sidebar.classList.toggle('responsive-focused');
        // };

        const handleResize = () => {
            if (window.outerWidth <= 600 && !responsive.sidebar?.classList.contains('responsive')) {
                responsive.sidebar.classList.add('responsive');
                // if (responsive.first_load) {
                //     responsive.sidebar.addEventListener('mouseover', switch_class);
                //     responsive.sidebar.addEventListener('mouseout', switch_class);
                //     responsive.first_load = false;
                // }
            } else if (window.outerWidth > 600) {
                responsive.sidebar?.classList.remove('responsive');
                responsive.sidebar?.classList.remove('responsive-focused');

                // if (!responsive.first_load){
                //     responsive.sidebar?.removeEventListener('mouseover', switch_class);
                //     responsive.sidebar?.removeEventListener('mouseout', switch_class);
                //     responsive.first_load = true;
                // }
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // run on mount

        return () => {
            window.removeEventListener('resize', handleResize);
            // if (!responsive.first_load){
            //     sidebar.removeEventListener('mouseover', switch_class);
            //     sidebar.removeEventListener('mouseout', switch_class);
            // }
        };
    }, [sidebarId]);
}