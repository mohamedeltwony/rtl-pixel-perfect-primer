import { MessageCircle, FileText, BarChart3, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./FeatureCard";

const BeatAppFeatures = () => {
  const mainFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "شات بوت واتساب ذكي AI",
      description: "يرحب بالعملاء، يرد على استفساراتهم ويربطهم بفريقنا بال CRM"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "نموذج تسجيل مخصص",
      description: "يجمع بيانات عملائك ويوجههم بالمقابل المناسب"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "CRM مرئي لتتبع المراحل",
      description: "تابع مراحل كل عميل بسهولة في لوحة واحدة"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "نظام Funnels مؤتمت",
      description: "حول الزوار إلى عملاء تلقائياً من أول زيارة حتى إتمام الصفقة"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "تقارير ذكية فورية",
      description: "اطلع على مؤشرات الأداء في الوقت الفعلي وحلل قراراتك"
    }
  ];

  return (
    <section className="min-h-screen bg-background py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ما الذي يقدمه{" "}
            <span className="gradient-text">BeatApp</span>
            ؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            آمنة شاملة لكل عملياتك.. لتكسب الوقت وتضاعف الإنتاجية
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {additionalFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                BeatApp
              </h3>
              <p className="text-muted-foreground text-sm">
                كل ما تحتاجه لإدارة عملياتك وأتمتة عملياتك بسهولة
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              احجز استشارتك المجانية ←
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeatAppFeatures;