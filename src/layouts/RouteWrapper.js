import React from 'react'
import { Route } from 'react-router'
import Navigation from '../components/Navigation'
import Content from '../components/Content'

const RouteWrapper = (path, title, content) => (
    
    <Route exact path={path}
        render={() => (
            <div>
                <Navigation title={title} />
                <Content content={content} />
            </div>
        )}
    />
)
export default RouteWrapper
