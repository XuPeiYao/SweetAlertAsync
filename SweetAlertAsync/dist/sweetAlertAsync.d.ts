declare var swal: any, sweetAlert: any;
declare function sweetAlertAsync(titleOrArguments: (string | SweetAlertArguments), text?: string, type?: ("warning" | "error" | "success" | "info")): any;
declare var swalAsync: typeof sweetAlertAsync;
interface SweetAlertArguments {
    title: string;
    text?: string;
    type?: ("warning" | "error" | "success" | "info");
    allowEscapeKey?: boolean;
    customClass?: string;
    allowOutsideClick?: boolean;
    showCancelButton?: boolean;
    showConfirmButton?: boolean;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonText?: string;
    closeOnConfirm?: boolean;
    imageUrl?: string;
    imageSize?: string;
    timer?: number;
    html?: boolean;
    animation?: boolean;
    inputType?: ("text" | "number" | "email" | "file");
    inputPlaceholder?: string;
    inputValue?: string;
    showLoaderOnConfirm?: boolean;
}
