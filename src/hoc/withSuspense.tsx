import React, {ComponentType, Suspense} from 'react';

export function withSuspense(Component: ComponentType) {
    return () => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        )
    }
}