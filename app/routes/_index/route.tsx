import { LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction, useLoaderData, useNavigate, json } from '@remix-run/react';
import { initializeEcomApi } from '~/lib/ecom/session';
import styles from './index.module.scss';
import { SpaceMotorsHeroSection } from '../../../src/components/space-motors-hero-section/space-motors-hero-section';
import { SpaceMotorsFeaturedSection } from '../../../src/components/space-motors-featured-section/space-motors-featured-section';
import { SpaceMotorsPromotedSection } from '../../../src/components/space-motors-promoted-section/space-motors-promoted-section';

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const ecomApi = await initializeEcomApi(request);
    const productsResponse = await ecomApi.getPromotedProducts();
    if (productsResponse.status === 'failure') {
        throw json(productsResponse.error);
    }

    return { products: productsResponse.body };
};

export default function HomePage() {
    const navigate = useNavigate();

    const { products } = useLoaderData<typeof loader>();

    return (
        <div className={styles.root}>
            <SpaceMotorsHeroSection />
            <SpaceMotorsFeaturedSection />
            <SpaceMotorsPromotedSection />
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = () => {
    const title = 'E-Commerce Starter';
    const description = 'Create your own e-commerce store';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: '/social-media-image.jpg',
        },
    ];
};
