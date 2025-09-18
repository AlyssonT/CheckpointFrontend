import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { useReviewController } from "../controller/ReviewController";
import { Select } from "../../../components/Select";
import { TextArea } from "../../../components/TextArea";
import { Paper } from "../../../components/Paper";
import { BiEdit } from "react-icons/bi";
import type { UserGameReview } from "../../Profile/model/ProfileModels";

interface ReviewFormViewProps {
  isEdit: boolean;
  hideForm?: () => void;
  userReviewData: UserGameReview | null;
}

export function ReviewFormView({
  isEdit,
  hideForm,
  userReviewData,
}: ReviewFormViewProps) {
  const {
    register,
    handleSubmit,
    formState,
    onSubmitPost,
    onSubmitPut,
    onDeleteReview,
    isSubmitting,
    statusOptions,
  } = useReviewController({ userReviewData, hideForm });

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Paper className="w-19/20 md:w-(--standard-page) flex flex-col gap-4">
        <form
          className="flex flex-col gap-4 p-4"
          onSubmit={handleSubmit(isEdit ? onSubmitPut : onSubmitPost)}
          noValidate
        >
          <div className="flex items-center gap-2 mb-2">
            <p className="text-xl font-bold">
              {(isEdit ? "Edit" : "Submit") + " Review"}
            </p>
            <BiEdit size={24} className="text-secondary" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:justify-end md:mr-4">
            <Select
              name="status"
              label="Status"
              register={register}
              error={formState.errors.status?.message}
              options={statusOptions}
            />
            <Input
              name="score"
              label="Score"
              type="number"
              className="min-w-32.5"
              autoComplete="off"
              min={0}
              max={100}
              register={register}
              error={formState.errors.score?.message}
            />
          </div>

          <TextArea
            name="review"
            label="Review"
            register={register}
            rows={5}
            maxLength={500}
            error={formState.errors.review?.message}
          />

          <div className="flex justify-end mt-4 gap-4">
            {isEdit && (
              <Button onClick={onDeleteReview} variant="danger">
                Delete
              </Button>
            )}
            <Button onClick={hideForm} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" loading={isSubmitting}>
              {`${isEdit ? "Edit" : "Submit"} Review`}
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
