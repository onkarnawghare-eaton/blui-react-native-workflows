/**
 * @packageDocumentation
 * @module Components
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native';

// Helpers
import parseTextForJSX, { ParsedJSXText } from '../helpers/parseTextForJSX';

/**
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const makeStyles = () =>
    StyleSheet.create({
        b: {
            fontWeight: 'bold',
        },
        none: {},
    });

/**
 * @param parseableText  The text to be parsed.
 * @param textStyle?  (Optional) Custom text style to apply to the tagged sub text.
 */
type FormattedTextProps = {
    parseableText: string;
    textStyle?: StyleProp<TextStyle>;
};

/**
 * Takes text and applies a style to tagged sub text.
 *
 * @category Component
 */
function FormattedText(props: FormattedTextProps): JSX.Element {
    const [parsedTextArray, setTextArray] = useState<ParsedJSXText[]>([]);
    const styles = makeStyles();

    useEffect(() => {
        const parseableTextOrEmpty = props.parseableText ?? '';
        const result = parseTextForJSX(parseableTextOrEmpty);
        setTextArray(result);
    }, [props.parseableText]);

    return (
        <>
            {parsedTextArray.map((chunk, index) => (
                <Text key={index} style={[props.textStyle, styles[chunk.tag as 'b' | 'none']]}>
                    {chunk.text}
                </Text>
            ))}
        </>
    );
}

export default FormattedText;
