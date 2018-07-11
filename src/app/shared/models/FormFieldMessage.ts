export interface FormFieldMessage {
    type: 'pending' | 'error' | 'success';
    message?: string;
}
