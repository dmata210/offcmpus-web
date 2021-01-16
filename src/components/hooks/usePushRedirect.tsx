import urlencode from 'urlencode'
import queryString from 'query-string'

/**
 * usePushRedirect
 * @desc Go to the route at page `target_route` and set the redirect state to the `redirect_route`.
 * The `redirect_route` is the route the page should return to once the task is completed at `target_route`
 * @param history The history hook instance
 * @param redirect_route 
 * @param target_route
 */
export const pushRedirect = (history: any, target_route: string, redirect_route: string) => {
    history.push({pathname: target_route, search: `?r=${urlencode(redirect_route)}`})
}

/**
 * resolveRedirect
 * @desc Take the redirect search query parameter and return to that path.
 * @param history 
 */
export const resolveRedirect = (history: any) => {
    history.push({
        pathname: queryString.parse(window.location.search).r || '/'
    });
}