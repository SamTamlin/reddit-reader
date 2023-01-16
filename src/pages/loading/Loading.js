import './loading.css';

export function Loading() {
    return(
        <div className='loading'>
            <p id='top'>Loading</p>
            <p>Please wait...</p>
            <img 
                id='rotate' 
                src='https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png' 
                alt='Spinning Reddit Alien'
                />
        </div>
    );
};
