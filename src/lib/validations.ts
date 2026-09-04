import { z } from "zod";

export const leadFormSchema = z.object({
  tenancyType: z.enum(
    ["council-tenant", "housing-association", "private-tenant", "homeowner"],
    {
      required_error: "Please select your tenancy type",
    }
  ),
  disrepairIssues: z
    .array(z.string())
    .min(1, "Please select at least one disrepair issue"),
  issueReported: z.enum(["yes-over-21-days", "yes-recently", "no"], {
    required_error: "Please tell us if this has been reported",
  }),
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid UK phone number")
    .max(15, "Please enter a valid UK phone number")
    .regex(
      /^(\+44|0)\d{10}$/,
      "Please enter a valid UK phone number (e.g., 07700900000)"
    ),
  email: z.string().email("Please enter a valid email address"),
  postcode: z
    .string()
    .min(5, "Please enter a valid UK postcode")
    .max(8, "Please enter a valid UK postcode")
    .regex(
      /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i,
      "Please enter a valid UK postcode"
    ),
  gdprConsent: z.literal(true, {
    errorMap: () => ({
      message: "You must consent to our privacy policy to proceed",
    }),
  }),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
