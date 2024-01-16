import categories from '@/app/data/categories.json';
import { PencilIcon } from '@heroicons/react/24/outline';
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

export default function UpdateCreateModal({product}) {
  //   const [images, setImages] = useState<ImageListType>([]);
  //   const [cover, setCover] = useState<ImageType>();

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      category: '',
      description: '',
      discount: 0,
      language: '',
      pageCount: 0,
      price: 0,
      publishYear: 0,
      publisher: '',
      sizeX: 0,
      sizeY: 0,
      sizeZ: 0,
      stock: 0,
      weight: 0,
      coverType: '',
      coverImage: '',
      image1: '',
      image2: '',
      image3: '',
    },
  });

  //   const onChange = (imageList: ImageListType) => {
  //     form.clearErrors('images');
  //     form.setValue(
  //       'images',
  //       imageList.map((image) => image['data_url']) as [string, ...string[]],
  //     );
  //     setImages(imageList);
  //     if (!cover) setCover(imageList[0]);
  //   };

  async function onSubmit({
    sizeX,
    sizeY,
    sizeZ,
    image1,
    image2,
    image3,
    ...values
  }: z.infer<typeof formSchema>) {
    // let uploadedImages = [];
    // for (let i = 0; i < images.length; i++) {
    //   const url = await uploadImage(images[i].file as File);
    //   uploadedImages.push(url);
    // }

    try {
      const book = {
        ...values,
        dimensionsInCm: {
          x: sizeX,
          y: sizeY,
          z: sizeY,
        },
        images: [image1, image2, image3].filter(Boolean),
      };
      const res = await axios.post('/api/books/create', book);
      setOpen(false);
      toast.success('Thêm sản phẩm thành công');
    } catch (error) {
      toast.error('Thêm sản phẩm thất bại! Vui lòng thử lại sau');
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="xs" className="right-0">
          <PencilIcon className="h-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:max-w-4xl max-w-[calc(100vw-1rem)]">
        <DialogHeader>
          <DialogTitle>Thêm sản phẩm</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 px-4 py-2 overflow-auto"
          >
            <div className="col-span-1">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tiêu đề</FormLabel>
                      <FormControl>
                        <Input placeholder={product.title} {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tác giả</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập tác giả" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <FormField
                    control={form.control}
                    name="publisher"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nhà phát hành</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập nhà phát hành" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="publishYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Năm phát hành</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập năm phát hành" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Giá</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập giá sách" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tiền giảm giá</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập tiền giảm giá" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormLabel>Kích thước</FormLabel>
                    <div className="grid grid-cols-3 gap-0.5">
                      <FormField
                        control={form.control}
                        name="sizeX"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="X" {...field} />
                            </FormControl>

                            <FormMessage className="whitespace-nowrap" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sizeY"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Y" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="sizeZ"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Z" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
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
