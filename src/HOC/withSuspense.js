import { Suspense } from "react";
import PreloaderLine from "./../Common/PreloaderLine/PreloaderLine";
const withSuspense = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<PreloaderLine />}>
                <Component {...props} />
            </Suspense>
        );
    };
};
export default withSuspense;
