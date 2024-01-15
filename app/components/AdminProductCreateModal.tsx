import categories from '@/app/data/categories.json';
import { PlusIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/Button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/Dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/Form';
import { Input } from './ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select';
import { Textarea } from './ui/Textarea';
import { useState } from 'react';
import { toast } from 'react-toastify';

const formSchema = z.object({
  title: z.string().min(1, 'Vui lòng nhập tiêu đề sách'),
  author: z.string().min(1, 'Vui lòng nhập tác giả'),
  publisher: z.string().min(1, 'Vui lòng nhập nhà phát hành'),
  publishYear: z.coerce.number().min(1, 'Vui lòng nhập năm phát hành'),
  price: z.coerce.number().min(1, 'Vui lòng nhập giá'),
  discount: z.coerce.number().min(1, 'Vui lòng nhập tiền giảm giá'),
  weight: z.coerce.number().min(1, 'Vui lòng nhập trọng lượng'),
  stock: z.coerce.number().min(1, 'Vui lòng nhập số lượng'),
  language: z.string().min(1, 'Vui lòng nhập ngôn ngữ'),
  category: z.string().min(1, 'Vui lòng chọn danh mục'),
  description: z.string().optional(),
  sizeX: z.coerce.number().min(0, 'Vui lòng nhập kích thước sách'),
  sizeY: z.coerce.number().min(0, 'Vui lòng nhập kích thước sách'),
  sizeZ: z.coerce.number().min(0, 'Vui lòng nhập kích thước sách'),
  coverType: z.string().min(1, 'Vui lòng chọn loại bìa'),
  pageCount: z.coerce.number().min(1, 'Vui lòng nhập số trang'),
  coverImage: z.string().min(1, 'Vui lòng chọn ảnh bìa'),
  image1: z.string().optional(),
  image2: z.string().optional(),
  image3: z.string().optional(),
});

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
                <div className="grid grid-cols-2 gap-4 px-4 py-2 overflow-auto max-h-[80vh]">

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

                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Khối lượng</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập khối lượng" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số lượng</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập số lượng" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ngôn ngữ</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập ngôn ngữ" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="coverType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loại bìa</FormLabel>

                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="- Chọn loại bìa -" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            {[
                              { label: 'Bìa cứng', value: 'hard' },
                              { label: 'Bìa mềm', value: 'soft' },
                            ].map(({ label, value }, index) => (
                              <SelectItem key={index} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pageCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số trang</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập số trang" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1 space-y-2">
              {/* <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Thêm ảnh, bìa</FormLabel>
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={5}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemove,
                        dragProps,
                      }) => (
                        <>
                          <div
                            onClick={() => {
                              onImageUpload();
                            }}
                            {...dragProps}
                            className="flex flex-col items-center justify-center w-full h-48 border-2 border-ferra-500 border-dashed rounded-lg cursor-pointer bg-ferra-50 hover:bg-ferra-200"
                          >
                            <div className="flex flex-col items-center justify-center pt-4 pb-4">
                              <PhotoIcon
                                width={48}
                                height={48}
                                className="text-ferra-500"
                              />
                              <p className="mt-6 text-sm flex gap-2 items-center justify-center">
                                <ArrowUpTrayIcon className="h-5 text-ferra-700" />
                                <span>
                                  Kéo và thả ảnh vào đây, hoặc{' '}
                                  <span className="text-ferra-700">Duyệt</span>
                                </span>
                              </p>
                            </div>
                            <Input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              multiple
                            />
                          </div>

                          <div className="overflow-y-auto max-h-[250px] py-2">
                            {imageList.map((image, index) => (
                              <div
                                key={index}
                                className="flex max-w-full p-2 border-[1px] mt-2 rounded-lg hover:border-casal-400 hover:bg-casal-50 justify-between gap-2"
                              >
                                <Image
                                  height={50}
                                  width={50}
                                  alt=""
                                  src={image['data_url']}
                                  className="w-12 h-12 object-cover"
                                />
                                <div className="flex-1">
                                  <p className="text-[14px] font-semibold">
                                    {image.file?.name.slice(0, 20)}
                                    {(image.file?.name.length || 0) > 20 &&
                                      '...'}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <span className="text-[12px] text-gray-500">
                                      {Math.ceil(
                                        (image.file?.size || 0) / 1000,
                                      )}{' '}
                                      KB
                                    </span>
                                    <div className="flex items-center gap-1 clear-start text-xs text-gray-500">
                                      <Checkbox
                                        checked={cover == image}
                                        onCheckedChange={() => setCover(image)}
                                        className="scale-75 origin-center"
                                      />
                                      <span>Đặt làm ảnh bìa</span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  onClick={() => onImageRemove(index)}
                                  className="flex items-center"
                                >
                                  <TrashIcon className="h-6 text-gray-400 hover:text-red-400" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </ImageUploading>
                    
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ảnh bìa</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập url ảnh bìa" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ảnh 1{' '}
                      <span className="text-xs text-gray-500 font-normal">
                        (Tùy chọn)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập url ảnh" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ảnh 2{' '}
                      <span className="text-xs text-gray-500 font-normal">
                        (Tùy chọn)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập url ảnh" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ảnh 3{' '}
                      <span className="text-xs text-gray-500 font-normal">
                        (Tùy chọn)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập url ảnh" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Danh mục</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="- Chọn danh mục -" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {categories.map(({ name }, index) => (
                          <SelectItem key={index} value={name}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>
                    Mô tả{' '}
                    <span className="text-gray-500 text-xs">(Tùy chọn)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Nhập mô tả sách"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="col-span-2 mt-4">
              <Button type="submit">Xuất bản</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
