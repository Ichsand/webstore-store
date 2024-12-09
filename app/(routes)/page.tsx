import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Banner from "@/components/banner";
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
    const products = await getProducts({isFeatured: true});
    const banner = await getBanner("1c944075-032e-4897-be04-254d767b403f"); 

    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Banner data={banner} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Product" items={products} />
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;