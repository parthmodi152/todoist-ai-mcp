import { Output, Services } from '~templates-utils'
import { Input } from './meta'

export function generate(input: Input): Output {
    const services: Services = []

    services.push({
        type: 'app',
        data: {
            serviceName: input.appServiceName,
            source: {
                type: 'image',
                image: input.appServiceImage,
            },
            domains: [
                {
                    host: '$(EASYPANEL_DOMAIN)',
                    port: 8080,
                },
            ],
            env: [
                {
                    key: 'TODOIST_API_KEY',
                    value: input.todoistApiKey,
                },
                {
                    key: 'PORT',
                    value: '8080',
                },
                {
                    key: 'NODE_ENV',
                    value: 'production',
                },
            ],
        },
    })

    return { services }
}
