import React from 'react';
import { Card, CardContent } from './style';

export default function RootCard({content}) {
    return (
        <React.Fragment>
            <Card style={{ background: content.color }}> 
                <CardContent>
                    { content.title }
                </CardContent>
                <CardContent>
                    { content.paragraph }
                </CardContent>
            </Card>
        </React.Fragment>
    )
}