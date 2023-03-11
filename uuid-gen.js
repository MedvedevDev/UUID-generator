/**
* The format of such a UUID is:
* xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
* Where M is 4 , and N is between 8 and b . There are other versions/variants
* too, but this combination is considered the random UUID
 */

/**
 * crypto.getRandomValue() guarantees to be cryptographically secure and also enjoys ubiquitous support from the browsers
 */

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0]
            & 15 >> c / 4).toString(16)
    )
}
