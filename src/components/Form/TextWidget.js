import { TextInput } from '../TextInput';
function TextWidget({
  schema,
  uiSchema,
  id,
  value,
  onChange = noop,
  onBlur = noop,
  onFocus = noop,
  disabled,
  required,
  readonly,
  label,
  rawErrors,
  rawHelp,
  rawDescription,
  options,
  autofocus,
  size = 'auto',
  placeholder,
  multiline,
  maxRows,
  minRows,
  rows,
  maxLength,
  unit,
  onKeyDown,
}) {

  const adornment = uiSchema['ui:adornment'] || '';

  function handleChange({ target: { value } }) {
    onChange(value === ''
      ? options.emptyValue
      : value);
  }

  function handleBlur({ target }) {
    onBlur(id, target.value);
  }

  function handleFocus({ target }) {
    onFocus(id, target.value);
  }

  const stringFormats = {
    email: 'email',
    password: 'password',
  };

  const mapTypes = {
    string: schema.format ? stringFormats[schema.format] : 'text',
    integer: 'number',
    number: 'number',
  };

  const fieldSize = schema.type === 'integer' ? 'm' : size;

  return (
    <TextInput
      id={id}
      type={schema.type ? mapTypes[schema.type] : 'text'}
      label={label}
      helpText={rawHelp}
      helpLabel={rawDescription}
      size={fieldSize}
      autoFocus={autofocus}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      disabled={disabled}
      readonly={readonly}
      value={value?.toString() || ''}
      required={required}
      error={Boolean(rawErrors?.length)}
      adornment={adornment}
      placeholder={schema.type === 'email' ? 'janedoe@conntech.com' : placeholder}
      multiline={multiline}
      maxLength={maxLength}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      minimum={schema?.minimum}
      actionLink={options?.actionLink}
      onActionLinkClick={options?.onActionLinkClick}
      showPasswordVisibilityToggle={options?.showPasswordVisibilityToggle}
      passwordVisibility={options?.passwordVisibility}
      actions={options?.actions}
      unit={unit}
      onKeyDown={onKeyDown}
    />
  );
}

export { TextWidget };
