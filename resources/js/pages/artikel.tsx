import BaseLayout from '@/layouts/base-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Artikel() {
    return (
        <BaseLayout>
            <div className="h-auto w-full">
                <div>
                    <h1 className="text-3xl font-bold">Artikel</h1>
                </div>
                <div className="gap-4 mt-6 flex flex-wrap">
                    <Card className="w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                        <CardHeader>
                            <CardTitle>Artikel 1</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p>Deskripsi singkat tentang artikel 1.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </BaseLayout>
    );
}
