/**
 * @packageDocumentation
 * @module Sub-Screens
 */

import React from 'react';

// Components
import CompleteSplash from './CompleteSplash';

// Hooks
import { useLanguageLocale } from '../hooks/language-locale-hooks';

/**
 * Type to represent the content of the registration complete component.
 *
 * @param firstName  The first name string.
 * @param lastName  The last name string.
 * @param email  The email string.
 * @param organization  The organization string.
 */
type RegistrationCompleteProps = {
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
};

/**
 * Renders the content of the notice of completed account creation screen
 * (textual content referring to user's email, name, and organization).
 *
 * @category Component
 */
export default function RegistrationComplete(props: RegistrationCompleteProps): JSX.Element {
    const { t } = useLanguageLocale();

    const welcomeTitle = `${t('MESSAGES.WELCOME')}, ${props.firstName} ${props.lastName}!`;
    const bodyText = t('REGISTRATION.SUCCESS_MESSAGE', {
        replace: { email: props.email, organization: props.organization },
    });

    return <CompleteSplash boldTitle={welcomeTitle} bodyText={bodyText} icon={'person'} />;
}
