import { ArrowUpTrayIcon, PhotoIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import Image from "next/image";
import { Textarea } from "./ui/Textarea";

export default function ProductCreateModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="xs" className="right-0">
                    <PlusIcon className="h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[850px]">
                <DialogHeader>
                    <DialogTitle>Thêm sản phẩm</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 px-4 py-2 overflow-auto">
                    <div className="col-span-1">
                        <p className="font-bold">Thêm ảnh, bìa</p>
                        <Label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-ferra-500 border-dashed rounded-lg cursor-pointer bg-ferra-50 hover:bg-ferra-200">
                            <div className="flex flex-col items-center justify-center pt-4 pb-4">
                                <PhotoIcon width={48} height={48} className="text-ferra-500" />
                                <p className="mt-6 text-sm flex gap-2 items-center justify-center">
                                    <ArrowUpTrayIcon className="h-5 text-ferra-700" />
                                    <span>Kéo và thả ảnh vào đây, hoặc <span className="text-ferra-700">Duyệt</span></span>
                                </p>
                            </div>
                            <Input id="dropzone-file" type="file" className="hidden" multiple />
                        </Label>
                        <div className="overflow-auto max-h-[250px]">
                            <div className="flex p-2 border-[1px] mt-2 rounded-lg hover:border-casal-400 hover:bg-casal-50 justify-between">
                                <div className="flex gap-1">
                                    <Image height={50} width={50} alt="" src="https://cdn0.fahasa.com/media/catalog/product/9/7/9786043717549_1.jpg" />
                                    <div>
                                        <p className="text-[14px] font-semibold">
                                            Và Khi Lạc Lối - Còn Tình Thương Ở Lại
                                        </p>
                                        <span className="text-[12px] text-gray-500">
                                            342 KB
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <TrashIcon className="h-6 text-gray-400 hover:text-red-400" />
                                </div>
                            </div>
                            <div className="flex p-2 border-[1px] mt-2 rounded-lg hover:border-casal-400 hover:bg-casal-50 justify-between">
                                <div className="flex gap-1">
                                    <Image height={50} width={50} alt="" src="https://cdn0.fahasa.com/media/catalog/product/9/7/9786043717549_1.jpg" />
                                    <div>
                                        <p className="text-[14px] font-semibold">
                                            Và Khi Lạc Lối - Còn Tình Thương Ở Lại
                                        </p>
                                        <span className="text-[12px] text-gray-500">
                                            342 KB
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <TrashIcon className="h-6 text-gray-400 hover:text-red-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-rows-1 gap-2">
                            <div>
                                <Label htmlFor="title" className="font-bold">Tiêu đề</Label>
                                <Input type="name" id="title" placeholder="Nhập tiêu đề sách" />
                            </div>
                            <div>
                                <Label htmlFor="author" className="font-bold">Tác giả</Label>
                                <Input type="name" id="author" placeholder="Nhập tác giả" />
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <div>
                                    <Label htmlFor="publisher" className="font-bold">Nhà phát hành</Label>
                                    <Input type="name" id="publisher" placeholder="Nhập nhà phát hành" />
                                </div>
                                <div>
                                    <Label htmlFor="publish_year" className="font-bold">Năm phát hành</Label>
                                    <Input type="number" id="publish_year" placeholder="Nhập năm phát hành" />
                                </div>
                                <div>
                                    <Label htmlFor="price" className="font-bold">Giá</Label>
                                    <Input type="number" id="price" placeholder="Nhập giá" />
                                </div>
                                <div>
                                    <Label htmlFor="publish_year" className="font-bold">Giảm giá <span className="text-[12px] font-normal text-gray-400">(tuỳ chọn)</span></Label>
                                    <Input type="number" id="publish_year" placeholder="Nhập % giảm giá" />
                                </div>
                                <div>
                                    <Label className="font-bold">Kích thước <span className="text-[12px] font-normal text-gray-400">(tuỳ chọn)</span></Label>
                                    <div className="grid grid-cols-3 gap-0.5">
                                        <Input type="number" id="x" placeholder="X" className="px-2" />
                                        <Input type="number" id="y" placeholder="Y" className="px-2" />
                                        <Input type="number" id="z" placeholder="Z" className="px-2" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="weight" className="font-bold">Trọng lượng <span className="text-[12px] font-normal text-gray-400">(tuỳ chọn)</span></Label>
                                    <Input type="number" id="weight" placeholder="Trọng lượng (g)" />
                                </div>
                                <div>
                                    <Label htmlFor="stock" className="font-bold">Số lượng</Label>
                                    <Input type="number" id="stock" placeholder="Nhập số lượng" />
                                </div>
                                <div>
                                    <Label htmlFor="language" className="font-bold">Ngôn ngữ <span className="text-[12px] font-normal text-gray-400">(tuỳ chọn)</span></Label>
                                    <Input type="number" id="language" placeholder="Ngôn ngữ sách" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="author" className="font-bold">Danh mục</Label>
                                <Input type="name" id="author" placeholder="Chọn danh mục" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Label className="font-bold">Mô tả <span className="text-[12px] font-normal text-gray-400">(tuỳ chọn)</span></Label>
                        <Textarea id="description" className="min-h-[150px] max-h-[250px]" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Xuất bản</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}