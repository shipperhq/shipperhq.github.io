import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const HubSpotForm = ({ region, portalId, formId }) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://js.hsforms.net/forms/v2.js'
        document.body.appendChild(script)

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region,
                    portalId,
                    formId,
                    target: '#hubspotForm',
                })
            }
        })

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div>
            <div id="hubspotForm" />
        </div>
    )
}

HubSpotForm.propTypes = {
    region: PropTypes.string,
    portalId: PropTypes.string,
    formId: PropTypes.string,
}

HubSpotForm.defaultProps = {
    region: 'na1',
    portalId: '20068459',
    formId: '58ec49ef-0e12-4988-bada-a704d8c26273',
}
